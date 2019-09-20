import React, {useState, useReducer, useContext, useEffect} from 'react'
import _ from 'lodash'
import {useForm, useField} from 'react-final-form-hooks'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react'

import FullScreenLooader from "../components/fullScreenLoader"

import {redirectTo, navigate} from "@reach/router"
import {useToasts} from 'react-toast-notifications'
import {useLocalStorage} from '../hooks/useLocalStorage';
import {useErrorHandler} from '../hooks/useErrorHandler'
import {authenticate, fetchUser} from '../services/authenticationService'
import memberReducer, {memberActions, initialMemberState} from '../reducers/MemberReducer'
import authReducer, {authActions, initialAuthState} from '../reducers/AuthReducer'

import {StateProvider, useStateValue} from '../contexts/stateContext'

import * as validator from "validator";

const Login = () => {

  const [isLoading,
    setIsLoading] = useState(true)

  const [{auth}, dispatch] = useStateValue()

  useEffect(() => {
    setIsLoading(false)
    if (auth.status) {
      navigate("/")
    }
    return () => setIsLoading(true)
  }, [auth])

  const [authUser,
    setAuthUser] = useLocalStorage("chatAuthUser", {
    status: false,
    user: {},
    token: ""
  })
  const [isSubmitting,
    setIsSubmitting] = useState(false)
  const {addToast, removeToast} = useToasts()
  const onSubmit = data => {
    setIsSubmitting(true)
    authenticate(data).then((result) => {
      if (result.status == true) {
        fetchUser(result).then((user) => {
          console.log("User from API", user)
          if (user.status == true) {
              // dispatch({
              //   type: authActions.setAuthDetails,
              //   data: {
              //     status:true,
              //     user: user.data,
              //     token: result.token
              //   }
              // })
            // Notification
            addToast(`Logged In successfully`, {appearance: 'success'})
            // Set user in localstorage
            setAuthUser({status: true, user: user.data, token: result.token})

            removeToast()
            // Navigate to chat
            if(user.role === 'ADMIN') {
              navigate("/admin")
            } else {
              navigate("/member")
            }
          } else {
            addToast(user.message, {appearance: 'error'})
          }
        })
      } else {
        addToast(result.message, {appearance: 'error'})
      }
      setIsSubmitting(false)
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
    if (values.email && !validator.isEmail(values.email)) {
      errors.email = {
        header: "Validation error",
        content: "Please enter a valid email address."
      }
    }
    return errors
  }

  const {form, handleSubmit, values, pristine, submitting} = useForm({onSubmit, validate})

  const email = useField('email', form)
  const password = useField('password', form)

  return (isLoading
    ? <FullScreenLooader></FullScreenLooader>
    : <StateProvider initialState={initialAuthState} reducer={authReducer}>
      <Grid
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
              Log-in to your account
            </Header>
            <Form error size='large' onSubmit={handleSubmit}>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                {...email.input}
                placeholder='E-mail address'/> {email.meta.touched && email.meta.error && (<Message
                error
                header={email.meta.error.header}
                content={email.meta.error.content}/>)}
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                {...password.input}
                type='password'/> {password.meta.touched && password.meta.error && (
                <span>{password.meta.error}</span>
              )}

              <Button
                color='green'
                fluid
                size='large'
                type='submit'
                loading={isSubmitting}
                disabled={isSubmitting}>
                Login
              </Button>
            </Form>
          </Segment>
          <Message>
            New to us?
            <a href='/signup'>
              Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </StateProvider>)
}

export default Login