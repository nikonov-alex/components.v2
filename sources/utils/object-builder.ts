import { Types } from "@nikonov-alex/functional-library";




const update = <O extends { [k: string]: any }, K extends string, V, B>(
    obj: O,
    key: K,
    value: V,
    callback: { ( obj: O & Record<K, V>, changed: boolean ): B }
): B =>
    ( change =>
        callback(
        change
                ? { ... obj, [key]: value }
                : obj,
            change
        )
    )( obj[key] !== value );


const optional = <O extends { [k: string]: any }, K extends string, V, B>(
    obj: O,
    key: K,
    value: Types.Maybe<V>,
    callback: { ( obj: O | O & Record<K, V>, changed: boolean ): B }
) =>
    update( obj, key, value ? value : undefined, callback )

const required = <O extends { [k: string]: any }, K extends string, V, B>(
    obj: O,
    key: K,
    value: Types.Either<V, Error>,
    callback: { ( obj: O & Record<K, V>, changed: boolean ): B }
) =>
    value instanceof Error
        ? value
        : update( obj, key, value, callback );

const ifTrue = <A, B>(
    condition: boolean,
    obj: A,
    then: { ( v: A ): B }
): A | B =>
    condition ? then( obj ) : obj;

const ifNotError = <A, B>(
    obj: A | Error,
    then: { ( v: A ): B }
) =>
    obj instanceof Error
        ? obj
        : then( obj );


export { update, required, optional, ifTrue, ifNotError };