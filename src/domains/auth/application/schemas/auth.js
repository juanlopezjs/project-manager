import * as yup from 'yup';
import { authFields } from '../constansts/authFields';
import { EMPTY_FIELD } from '../../../../shared/application/constants/messages/error-messages';

const authValidation = {
	[authFields.USERNAME]: yup.string().required(EMPTY_FIELD),
	[authFields.PASSWORD]: yup.string().required(EMPTY_FIELD),
};

const authSchema = yup.object().shape(authValidation);

export default authSchema;
