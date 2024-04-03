
import {Text, TextInput, Pressable, View, Alert, StyleSheet} from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
    usr: yup
      .string()
      //.min(1, 'Weight must be greater or equal to 1')
      .required('Username is required'),
    pass: yup
      .string()
      //.min(0.5, 'Height must be greater or equal to 0.5')
      .required('Password is required'),});

const initialValues = {
  usr: '',
  pass: '',
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 111,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'cyan',
    transparent: true,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    padding: 5,
    
  },
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={(formik.errors.usr && formik.touched.usr) ? styles.errInput : styles.input}
        placeholder="username"
        value={formik.values.usr}
        onChangeText={formik.handleChange('usr')}
      />
      {formik.touched.usr && formik.errors.usr && (
        <Text style={{ color: 'red' }}>{formik.errors.usr}</Text>
      )}
      <TextInput
        style={(formik.errors.pass && formik.touched.pass) ? styles.errInput : styles.input}
        secureTextEntry
        placeholder="password"
        value={formik.pass}
        onChangeText={formik.handleChange('pass')}
      />
      {formik.touched.pass && formik.errors.pass && (
        <Text style={{ color: 'red' }}>{formik.errors.pass}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit        
        /*() => Alert.alert(formik.usr)*/}>
        <Text style={styles.buttonText}>Sign in!</Text>
      </Pressable>
      
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    //const usr = String(values.usr);
    //const pass = String(values.pass);
    /*if (!isNaN(usr) && !isNaN(pass)) {
      Alert.alert(`username: ${usr}, password: ${pass}`);}*/
      console.log(values);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;