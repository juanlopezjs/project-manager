import * as yup from 'yup';
import { authFields } from '../constansts/authFields';
import { EMPTY_FIELD } from '../../../../shared/application/constants/messages/error-messages';

const usersValidation = {
	[authFields.USERNAME]: yup.string().required(EMPTY_FIELD),
	[authFields.PASSWORD]: yup.string().required(EMPTY_FIELD),
};

const usersSchema = yup.object().shape(usersValidation);

export default usersSchema;
