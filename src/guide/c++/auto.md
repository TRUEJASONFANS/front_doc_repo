auto and auto && cover most of the cases:

Use auto when you need a local copy. This will never produce a reference. The copy (or move) constructor must exist, but it might not get called, due to the copy elision optimization.

Use auto && when you don't care if the object is local or not. Technically, this will always produce a reference, but if the initializer is a temporary (e.g., the function returns by value), it will behave essentially like your own local object.

Also, auto && doesn't guarantee that the object will be modifiable, either. Given a const object or reference, it will deduce const. However, modifiability is often assumed, given the specific context.

auto & and auto const & are a little more specific:

auto & guarantees that you are sharing the variable with something else. It is always a reference and never to a temporary.

auto const & is like auto &&, but provides read-only access.

What about for primitive/non-primitive types?

There is no difference.

Does this also apply to range based for loops?

Yes. Applying the above principles,

Use auto && for the ability to modify and discard values of the sequence within the loop. (That is, unless the container provides a read-only view, such as std::initializer_list, in which case it will be effectively an auto const &.)
Use auto & to modify the values of the sequence in a meaningful way.
Use auto const & for read-only access.
Use auto to work with (modifiable) copies.

总结auto(值拷贝), auto &&(引用传递或者临时变量捕获， 非值拷贝)