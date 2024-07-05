import React, { useState } from 'react';

import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import {
  IconButton,
  Stack,
  Typography,
  InputAdornment,
  Link,
} from '@mui/material';

import Style from './style';
import Button from '../../common/Button';
import Textfield from '../../common/TextField';
import PhoneInput from '../../common/PhoneInput';
import { Controller, useForm } from 'react-hook-form';
import { handleImageUpload } from '../../utils/helper';
import { Toast } from '../../components/Toast';
// import { updateAccountDetails } from '../../../actions/Settings';
import { changePassword } from '../../apis/Auth';
import { sendPassowrdLink } from '../../apis/Auth';

import {
  regexForLeadingAndTrailingSpaces,
  validationForWhiteSpacePasswords,
} from '../../utils/strings';

import Navbar from '../Navbar';

const Styles = makeStyles((theme) => Style(theme));

export default function Account() {
  const classes = Styles();
  const userData = '';
  const userDataLoading = '';

  const {
    handleSubmit,
    control,
    formState: { isDirty },
    setValue,
    getValues,
    reset: resetAccountDetailsForm,
  } = useForm({
    ...(userData && {
      defaultValues: { ...userData, image: userData?.profileImg },
      mode: 'onSubmit',
    }),
  });

  const {
    handleSubmit: handleSubmitPasswordForm,
    control: controlPassowrd,
    formState: { errors: passwordErrors },
    watch,
  } = useForm();
  const newPassword = watch('newPassword');

  const [emailButtonText, setEmailButtonText] = useState('Send');
  const [showPassword, setShowPassword] = useState(false);
  const [loadingPasswordLink, setLoadingPasswordLink] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [loading, setLoading] = useState(false);
  const handleChangeImageUpload = async (e) => {
    const result = await handleImageUpload(e);

    if (result.image && !result.error) {
      const { image } = result;
      setValue('image', image, { shouldDirty: true });
    } else {
      const { errorMessage } = result;
      Toast('error', errorMessage);
    }
  };
  const [profileImage] = getValues(['image']);

  const handleSubmitAccountDetails = (values) => {
    const valuesToUpdate = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      employeeTitle: values.employeeTitle,
      address: values.address,
      id: values.id,
      profileImg: values.image,
    };
    // api call
    console.log(':::valuesToUpdate', valuesToUpdate);

    resetAccountDetailsForm(values);
  };

  const handleSubmitPasswordChange = async (values) => {
    try {
      setLoading(true);
      const { data } = await changePassword({
        id: userData.id,
        password: values.password,
        newPassword: values.newPassword,
      });
      if (data) {
        setLoading(false);
        Toast(data.status === 1 ? 'success' : 'error', data.message);
      }
    } catch (error) {
      Toast('error', error.message || 'Something went wrong');
    }
  };

  const onSubmitPasswordResetLink = async () => {
    try {
      setLoadingPasswordLink(true);
      const { data } = await sendPassowrdLink({ email: userData?.email });
      if (data) {
        setLoadingPasswordLink(false);
        Toast('success', 'Password reset link sent');
        setEmailButtonText('sent');
        setTimeout(() => {
          setEmailButtonText('Send');
        }, 2000);
      }
    } catch (err) {
      setLoadingPasswordLink(false);
      Toast('error', 'Something Went wrong');
    }
  };
  console.log('profileImage', profileImage);
  return (
    <>
      <Navbar />
      <Stack
        p={10}
        direction='column'
        className={classes.business__profile__settings}
      >
        <form>
          <Stack direction='row' justifyContent='space-between'>
            <div className={clsx(classes.add__logo, 'd-flex align-center')}>
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='label'
                className='upload__icon'
              >
                <input
                  hidden
                  accept='image/png, image/jpg, image/jpeg,'
                  type='file'
                  name='profileImg'
                  onChange={handleChangeImageUpload}
                />
                {profileImage ? (
                  <img
                    src={profileImage || ''}
                    alt=''
                    srcset=''
                    height='100%'
                    width='100%'
                    style={{ borderRadius: '50%' }}
                  />
                ) : (
                  <AddAPhotoRoundedIcon />
                )}
              </IconButton>
              <div className='pl__1'>
                <Typography variant='h3' color='primary.heading'>
                  {`${userData?.firstName || ''} ${userData?.lastName || ''}`}
                </Typography>
                <Typography
                  variant='h6'
                  color='disabled.light'
                  sx={{ fontWeight: '400' }}
                >
                  You can upload image up to 5 mb in size
                </Typography>
                <Link component='label' color='primary.main'>
                  <Typography
                    variant='h6'
                    color='primary.main'
                    pt={0.5}
                    sx={{ fontWeight: '600', cursor: 'pointer' }}
                  >
                    {profileImage ? 'Change' : 'Upload'} Image
                  </Typography>

                  <input
                    hidden
                    accept='image/png, image/jpg, image/jpeg,'
                    type='file'
                    name='profileImg'
                    onChange={handleChangeImageUpload}
                  />
                </Link>
              </div>
            </div>

            <Stack>
              {false ? (
                <Button
                  title='Edit Profile'
                  color='secondary'
                  variant='outlined'
                  height='40px'
                  width='130px'
                />
              ) : (
                <Button
                  title='Save Changes'
                  color='secondary'
                  variant='contained'
                  height='40px'
                  width='130px'
                  disabled={userDataLoading || !isDirty}
                  onClick={handleSubmit(handleSubmitAccountDetails)}
                />
              )}
            </Stack>
          </Stack>
          <Stack>
            <Stack
              direction='row'
              width='100%'
              justifyContent='flex-start'
              className={clsx(classes.fields__space)}
              spacing={2}
            >
              <Controller
                name={'firstName'}
                control={control}
                // rules={{
                //   pattern: {
                //     value: regexForLeadingAndTrailingSpaces,
                //     message: 'Leading and Trailing spaces are not allowed',
                //   },
                // }}
                render={({
                  field: { onChange, value },
                  fieldState: { error, isTouched },
                }) => (
                  <Textfield
                    placeholder='Enter First Name'
                    error={isTouched && !!error}
                    helperText={error?.message}
                    margin='dense'
                    label='First Name'
                    variant='outlined'
                    name='firstName'
                    value={value || ''}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                name={'lastName'}
                control={control}
                // rules={{
                //   required: 'Last Name Is required',
                //   pattern: {
                //     value: regexForLeadingAndTrailingSpaces,
                //     message: 'Leading and Trailing spaces are not allowed',
                //   },
                // }}
                render={({
                  field: { onChange, value },
                  fieldState: { error, isTouched },
                }) => (
                  <Textfield
                    placeholder='Enter Last Name'
                    margin='dense'
                    label='Last Name'
                    variant='outlined'
                    name='lastName'
                    error={isTouched && !!error}
                    helperText={error?.message}
                    value={value || ''}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                name={'email'}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Textfield
                    placeholder='Enter Email Address'
                    margin='dense'
                    label='Email Address*'
                    variant='outlined'
                    name='email'
                    value={value || ''}
                    onChange={onChange}
                    disabled={true}
                  />
                )}
              />

              <Controller
                name={'phone'}
                control={control}
                rules={{
                  required: 'Phone Number Is required',
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error, isTouched },
                }) => (
                  <PhoneInput
                    label='Phone Number*'
                    name='phone'
                    value={value || ''}
                    error={isTouched && !!error}
                    helperText={error?.message}
                    onChange={(value, data, event, formattedValue) =>
                      onChange(formattedValue)
                    }
                    disabled
                  />
                )}
              />
            </Stack>
            <Stack
              direction='row'
              width='100%'
              justifyContent='flex-start'
              className={clsx(classes.fields__space)}
              spacing={2}
            >
              <Controller
                name={'employeeTitle'}
                control={control}
                // rules={{
                //   pattern: {
                //     value: regexForLeadingAndTrailingSpaces,
                //     message: 'Leading and Trailing spaces are not allowed',
                //   },
                // }}
                render={({
                  field: { onChange, value },
                  fieldState: { error, isTouched },
                }) => (
                  <Textfield
                    placeholder='Enter Employee Title'
                    margin='dense'
                    label='Employee Title'
                    variant='outlined'
                    name='employeeTitle'
                    error={isTouched && !!error}
                    helperText={error?.message}
                    value={value || ''}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                name={'address'}
                control={control}
                // rules={{
                //   pattern: {
                //     value: regexForLeadingAndTrailingSpaces,
                //     message: 'Leading and Trailing spaces are not allowed',
                //   },
                // }}
                render={({
                  field: { onChange, value },
                  fieldState: { error, isTouched },
                }) => (
                  <Textfield
                    placeholder='Enter Address'
                    margin='dense'
                    label='Address'
                    error={isTouched && !!error}
                    helperText={error?.message}
                    variant='outlined'
                    name='address'
                    value={value || ''}
                    onChange={onChange}
                  />
                )}
              />

              <div className='control-width' />
            </Stack>
          </Stack>
        </form>
        <Typography
          pb={1.5}
          variant='listText'
          color='primary.heading'
          sx={{ fontWeight: '500' }}
        >
          Change Password
        </Typography>
        <form>
          <Stack
            spacing={2}
            width='100%'
            direction='row'
            alignItems='center'
            justifyContent='flex-start'
            className={clsx(classes.fields__space)}
          >
            <Controller
              name={'password'}
              control={controlPassowrd}
              rules={{
                required: 'Enter Current Password',
                validate: (value) =>
                  validationForWhiteSpacePasswords(value) ||
                  'Leading and Trailing spaces are not allowed',
              }}
              render={({
                field: { onChange, value },
                fieldState: { error, isTouched },
              }) => (
                <Textfield
                  placeholder='Enter Password'
                  margin='dense'
                  label='Current Password'
                  error={isTouched && !!error}
                  helperText={error?.message}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={value}
                  name='password'
                  onChange={onChange}
                  type={showPassword ? 'text' : 'password'}
                />
              )}
            />
            <Controller
              name={'newPassword'}
              control={controlPassowrd}
              rules={{
                required: 'Enter New Password',
                validate: (value) =>
                  validationForWhiteSpacePasswords(value) ||
                  'Leading and Trailing spaces are not allowed',
              }}
              render={({
                field: { onChange, value },
                fieldState: { error, isTouched },
              }) => (
                <Textfield
                  placeholder='Enter Password'
                  margin='dense'
                  error={isTouched && !!error}
                  helperText={error?.message}
                  label='New Password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={value}
                  name='newPassword'
                  onChange={onChange}
                  type={showPassword ? 'text' : 'password'}
                />
              )}
            />
            <Controller
              name={'confirmPassword'}
              control={controlPassowrd}
              rules={{
                required: 'Enter Confirm Password',
                validate: (value) =>
                  value === newPassword || 'Password do not match',
                pattern: {
                  value: regexForLeadingAndTrailingSpaces,
                  message: 'Leading and Trailing spaces are not allowed',
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error, isTouched },
              }) => (
                <Textfield
                  placeholder='Enter Password'
                  margin='dense'
                  label='Confirm Password'
                  error={isTouched && !!error}
                  helperText={error?.message}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={value || ''}
                  name='password'
                  onChange={onChange}
                  type={showPassword ? 'text' : 'password'}
                />
              )}
            />
            <Button
              title='Save'
              loading={loading}
              disabled={loading}
              color='secondary'
              variant='outlined'
              height='40px'
              width='95px'
              onClick={handleSubmitPasswordForm(handleSubmitPasswordChange)}
            />
          </Stack>
        </form>
        <Typography
          pb={1.5}
          variant='listText'
          color='primary.heading'
          sx={{ fontWeight: '500' }}
        >
          Reset Password
        </Typography>
        <Stack
          spacing={2}
          width='100%'
          direction='row'
          alignItems='center'
          justifyContent='flex-start'
          className={clsx(classes.fields__space)}
        >
          <Textfield
            placeholder='Enter Email Address'
            margin='dense'
            label='Email Address*'
            variant='outlined'
            name='email'
            disabled={true}
            value={userData?.email}
          />
          <Button
            title={emailButtonText}
            disabled={loadingPasswordLink || emailButtonText === 'sent'}
            loading={loadingPasswordLink}
            color='secondary'
            variant='outlined'
            height='40px'
            width='95px'
            onClick={onSubmitPasswordResetLink}
          />
        </Stack>
      </Stack>
    </>
  );
}
