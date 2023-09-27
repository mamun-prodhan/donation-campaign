# Course Registration

## Features

1. User can select course within 20 credit hour
2. If the credit hour is more than 20 then it will show a toast that user can't add more than 20 credit
3. There is remaining credit hour , it will show how much credit hour user can add from 20
4. User can't add the course again which is already added

## State Management

In this project for managing state, I have used React state hook, useState(). I declared the state in the common parent component of two child paren component. I lifting up the state in parent component so that i can share it in two child component together. React has one way data binding which is parent to child. So i declared the state in parent and share it to the child component
