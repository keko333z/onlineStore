import * as Yup from 'yup';

const today = new Date()
const year = today.getFullYear()
const yearshort= parseInt((year.toString()).substring(2));

export const CheckoutInformationSchema = Yup.object().shape({
    phone: Yup.number()
      .min(999999999, 'not valid')
      .max(9999999999, 'Too long')
      .required('Required'),
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    deliveryAdress: Yup.string()
      .min(3, 'not valid, too short')
      .max(50, 'Too Long!')
      .required('Required'),
    city: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    state: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    credCard: Yup.number()
      .min(9999999, 'not valid, too short')
      .max(99999999, 'Too long')
      .required('Required'),
    zipCode: Yup.number()
      .min(99, 'not valid, too short')
      .max(99999, 'Too long')
      .required('Required'),
    cardExpirationDateMonth: Yup.number()
      .min(1, "month hast to be between 01 and 12")
      .max(12, "month hast to be between 01 and 12")
      .required('Required'),
    cardExpirationDateYear: Yup.number()
      .min(yearshort, "year has to be after "+yearshort)
      .max(yearshort+6, "Wrong expiration year")
      .required('Required'),
    cardCode: Yup.number()
      .min(100, 'Too Short!')
      .max(999, 'Too Long!')
      .required('Required'),
  });
  