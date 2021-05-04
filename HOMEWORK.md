# Homework

## Exercise 13


### Task 1.

Modify `Students.js` so that `otherStudents` is not an array
of objects, but just an array of names. Like:

`['Kasia', 'Wojtek', ...]`

And then modify application in such way that second component
is used, called `StudentListArray` which displays these names
in a table similar to the existing one (i.e. without beers).

Modify `<App>` component in such way that user can sort
students' list alphabetically from A-Z and Z-A.

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