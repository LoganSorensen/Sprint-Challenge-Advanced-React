- [X] Why would you use class component over function components (removing hooks from the question)?

    -Class components allow you to create and update state, as well as implement lifecycle methods.

- [X] Name three lifecycle methods and their purposes.

    -componentDidMount is invoked when a component is added to the DOM and can be used to set state and set up subscriptions. componentDidUpdate is invoked anytime the component updates after the initial render. State can be updated here and additional network requests can be made. Finally, componentWillUnmount is invoked right before a component is removed from the DOM. During this phase, any subscriptions should be stopped and network requests should be cancelled.

- [X] What is the purpose of a custom hook?

    -Custom hooks are a more personalized variety of hooks that can be used for a number of different jobs. The fact that they are still hooks means that this code is reusable as well.

- [X] Why is it important to test our apps?

    -Not only does testing allow developers to find bugs in their code much faster, it also serves to build confidence in the code. By testing, developers can ensure that their code covers as many use cases as possible as well as provide documentation for their work.