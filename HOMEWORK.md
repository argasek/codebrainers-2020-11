# Homework

## Exercise 12


### Task 1.

Modify `<StudentInput>` component in such way that you can
decide on border color from the passed properties.

### Task 2.

Modify `<StudentInput>` component in such way that if user
doesn't type anything in the input field (the field is empty),
it shows "Please type a name" instead of student's name.

If there is at least one character typed, it should be displayed.

Bonus task:* what if user types just a single ' '? Probably we
should not display it, but still keep the "Please type a name"
message on. How to achieve that? Well, `.trim()` is your friend.

### Task 3.*

Modify code in such way that there is no need to create multiple
```javascript
onChangeSomethingSomething()
```
methods.