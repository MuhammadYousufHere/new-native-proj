import * as YUP from 'yup';

const useFormValidation = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const fullName = YUP.string().required('signup.fullname_required');
  const dateOfBirth = YUP.string().required(
    'signup.date_of_birth_or_year_required',
  );
  const userName = YUP.string()
    .min(
      8,
      ({min}) =>
        `${'signup.username_min_length'} ${min} ${'signup.characters_long'}`,
    )
    .max(
      24,
      ({max}) =>
        `${'signup.username_max_length'} ${max} ${'signup.characters_long'}`,
    )
    .matches(/^(\S?\.?[A-Za-z0-9-$&|_])+$/, 'signup.username_validation')
    .required('signup.username_required');

  const email = YUP.string().email();

  const location = YUP.string().required('form.location_required');

  return {
    fullName,
    userName,
    email,
    location,
    dateOfBirth,
  };
};

export default useFormValidation;
