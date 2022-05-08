import axios from 'axios';
import { BACKEND_BASE_URL } from '../environment.utils';

const uploadImage = async (image) => {
	const data = new FormData();
	data.append('file', image);
	data.append('upload_preset', 'crtkv5rb');
	data.append('cloud_name', 'trojanscit');
	return await fetch(
		'  https://api.cloudinary.com/v1_1/trojanscit/image/upload',
		{
			method: 'post',
			body: data
		}
	)
		.then((resp) => resp.json())
		.then((data) => {
			return data.url;
		})
		.catch((err) => console.log(err));
};

export const registrationEventAxios = async (
	name,
	email,
	phone,
	department,
	year,
	college,
	event,
	workshops,
	gaming,
	uploadPaper,
	uploadAbstract,
	uploadPresentation
) => {
	const paper = await uploadImage(uploadAbstract).then((url) => url);
	const abstract = await uploadImage(uploadPresentation).then((url) => url);
	const presentation = await uploadImage(uploadPaper).then((url) => url);

	return axios.post(`${BACKEND_BASE_URL}/data`, {
		name,
		email,
		phone,
		department,
		year,
		college,
		event,
		workshops,
		gaming,
		paper,
		abstract,
		presentation
	});
};
