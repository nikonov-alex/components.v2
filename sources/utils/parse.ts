import { Types } from "@nikonov-alex/functional-library";

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
        )( parseInt( elem.getAttribute( attribName ) as string, 10 ) )
        : false;