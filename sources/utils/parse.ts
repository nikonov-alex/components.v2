import { Types, Maybe } from "@nikonov-alex/functional-library";

export const boolean = ( elem: HTMLElement, attribName: string ): Types.Maybe<boolean> =>
    elem.hasAttribute( attribName )
        ? ( value => "true" === value || "" === value
        )( ( elem.getAttribute( attribName ) as string ).toLowerCase() )
        : false;

export const number = ( elem: HTMLElement, attribName: string ): Types.Maybe<number> =>
    elem.hasAttribute( attribName ) && elem.getAttribute( attribName ) !== ""
        ? ( value =>
                Number.isNaN( value )
                    ? false : value
        )( parseFloat( elem.getAttribute( attribName ) as string ) )
        : false;

export const int = ( elem: HTMLElement, attribName: string ): Types.Maybe<number> =>
    Maybe.ifNotFalse( number( elem, attribName ),
    number => Number.isInteger( number ) ? number : false );

export const positiveInt = ( elem: HTMLElement, attribName: string ): Types.Maybe<number> =>
    Maybe.ifNotFalse( int( elem, attribName ),
        number => number > 0 ? number : false );
