import {
  createFields,
  Input,
  TextArea,
} from 'components/common/FormsControls/FormsControls';
import React from 'react';
import { reduxForm } from 'redux-form';
import Form from 'redux-form/lib/Form';
import s from './ProfileInfo.module.css';

const ProfileDataForm = (props) => {
  return (
    <form>
      <button onClick={props.goToEditMode}>save</button>

      <div>
        <h2>Full name:</h2>
        {createFields(
          Input,
          'fullName',
          'text',
          'FullName',
          [],
          props.profile.fullName
        )}
      </div>
      <span>
        <h2>About me:</h2>
        {createFields(
          TextArea,
          'AboutME',
          'text',
          'AboutMe',
          [],
          props.profile.aboutMe
        )}
      </span>
      <br />

      <span>
        <h2>Loking for a job?:</h2>
        {createFields(Input, 'LookingForAJob', 'checkbox', '', [], null)}
      </span>
      <br />

      <span>
        <h2>My proffesional skills:</h2>

        {createFields(
          TextArea,
          'LookingForAJobDescription',
          'text',
          'My proffesional skills',
          []
        )}
      </span>
      <span>
        <h2>Contacts:</h2>
        {/* {Object.keys(props.profile.contacts).map((key) => {
          if (props.profile.contacts[key]) {
            return (
              <Contact
                key={key}
                ContactTitle={key}
                ContactValue={props.profile.contacts[key]}
              />
            );
          }
          return '';
        })} */}
      </span>
    </form>
  );
};

// const Contact = ({ ContactTitle, ContactValue }) => {
//   return (
//     <div>
//       <b>
//         <h3>{ContactTitle}:</h3>
//         <a className={s.contacts}>{ContactValue}</a>
//       </b>
//     </div>
//   );
// };

const ProfileDataFormWithReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
);

export default ProfileDataFormWithReduxForm;
