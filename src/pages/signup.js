import React, {useState, useEffect} from 'react'
import {useForm, useField} from 'react-final-form-hooks'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';
import * as validator from "validator";
import {redirectTo, navigate} from "@reach/router";
import FullScreenLooader from "../components/fullScreenLoader";
import {useToasts} from 'react-toast-notifications';
import {StateProvider, useStateValue} from '../contexts/stateContext';
import {registerAdmin} from '../services/adminService'

const Signup = () => {
  const [isLoading,
    setIsLoading] = useState(true)

  const [emailError,
    setEmailError] = useState()
  const [phoneError,
    setPhoneError] = useState()

  const [
    {
      auth
    }
  ] = useStateValue()

  useEffect(() => {
    setIsLoading(false)
    if (auth.status) {
      navigate("/chat")
    }
    return () => setIsLoading(true)
  }, [auth])

  const [isSubmitting,
    setIsSubmitting] = useState(false)
  const {addToast} = useToasts()
  const onSubmit = data => {
    setIsSubmitting(true)
    registerAdmin(data).then((registration) => {
      if (registration.status == true) {

        // Notification
        addToast(`Signup successfully`, {appearance: 'success'})
        // Reset form
        setIsSubmitting(false)

      } else {
        addToast(registration.message, {appearance: 'error'})
        registration
          .data
          .map((validationError) => {
            switch (validationError.param) {
              case "email":
                setEmailError(validationError.msg);
                break;
              case "phone":
                setPhoneError(validationError.msg);
                break;
            }
          })
        setIsSubmitting(false)
      }
    }).catch((error) => {
      console.log("Error", error)
      setIsSubmitting(false)
    })
  }

  const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    }
    if (emailError || values.email && !validator.isEmail(values.email)) {
      errors.email = {
        header: "Validation error",
        content: emailError || "Please enter a valid email address."
      }
    }
    if (phoneError || values.phone && !validator.isMobilePhone(values.phone)) {
      errors.email = {
        header: "Validation error",
        content: phoneError || "Please enter a valid phone number."
      }
    }

    if (values.confirmPassword && values.confirmPassword !== values.password) {
      errors.confirmPassword = {
        header: "Validation error",
        content: "Password mismatch"
      }
    }
    return errors
  }

  const {form, handleSubmit, values, pristine, submitting} = useForm({onSubmit, validate})

  const firstName = useField('firstName', form)
  const lastName = useField('lastName', form)
  const email = useField('email', form)
  const phone = useField('phone', form)
  const password = useField('password', form)
  const confirmPassword = useField('confirmPassword', form)

  return (isLoading
    ? <FullScreenLooader></FullScreenLooader>
    : <Grid
      textAlign='center'
      style={{
      height: '100vh'
    }}
      verticalAlign='middle'>
      <Grid.Column style={{
        maxWidth: 450
      }}>
        <Segment stacked>
          <Header as='h2' color='green' textAlign='center'>
            <Image src='http://placeimg.com/640/480/tech/grayscale' avatar/>
            Sign up for a new account
          </Header>
          <Form error size='large' onSubmit={handleSubmit}>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              {...firstName.input}
              placeholder='First Name'/> {firstName.meta.touched && firstName.meta.error && (<Message
              error
              header={firstName.meta.error.header}
              content={firstName.meta.error.content}/>)}
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Last Name'
              {...lastName.input}
              type={'text'}/> {lastName.meta.touched && lastName.meta.error && (<Message
              error
              header={lastName.meta.error.header}
              content={lastName.meta.error.content}/>)}
            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              {...email.input}
              placeholder='Email address'
              type={'text'}/> {email.meta.touched && email.meta.error && (<Message
              error
              header={email.meta.error.header}
              content={email.meta.error.content}/>)}
            <Form.Input
              fluid
              icon='phone'
              iconPosition='left'
              {...phone.input}
              placeholder='Phone number'
              type={'text'}/> {phone.meta.touched && phone.meta.error && (<Message
              error
              header={phone.meta.error.header}
              content={phone.meta.error.content}/>)}
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              {...password.input}
              type='password'/> {password.meta.touched && password.meta.error && (
              <span>{password.meta.error}</span>
            )}
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm password'
              {...confirmPassword.input}
              type='password'/> {confirmPassword.meta.touched && confirmPassword.meta.error && (<Message
              error
              header={confirmPassword.meta.error.header}
              content={confirmPassword.meta.error.content}/>)}

            <Button
              color='green'
              fluid
              size='large'
              type='submit'
              loading={isSubmitting}
              disabled={isSubmitting}>
              Sign up
            </Button>
          </Form>
        </Segment>
        <Message>
          Already have an account?
          <a href='/login'>Login</a>
        </Message>
      </Grid.Column>
    </Grid>)
}

export default Signup;