import {Link} from "@tanstack/react-router";
import {Icon} from "@repo/ui/atoms";
import {useAppForm, FormContainer} from "@repo/ui/molecules";

const GENDER_OPTIONS = [
  {label: 'Male', value: 'M'},
  {label: 'Female', value: 'F'},
]

export default function AddUser() {
  const form = useAppForm({
    defaultValues: {
      fullName: '',
      gender: '',
      email: '',
      phone: '',
    },
    onSubmit: ({value}) => {
      alert(JSON.stringify(value, null, 2))
    },
  });

  return (
    <div>
      <div className="flex items-center gap-3">
        <Link to="/users">
          <Icon name="ArrowLeft"/>
        </Link>
        <h2 className="font-semibold text-lg">New user</h2>
      </div>
      <div className="mt-5">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FormContainer>
            <form.AppField
              name="fullName"
              validators={{
                onChange: ({value}) => {
                  if (value.length < 3) {
                    return 'Full name must be at least 3 characters'
                  }
                  return undefined;
                },
              }}
            >
              {({TextField}) => (
                <TextField label="Full Name" placeholder="Full name..." withAsterisk/>
              )}
            </form.AppField>
            <form.AppField
              name="gender"
              validators={{
                onChange: ({value}) => {
                  if (!value) {
                    return 'Gender is required'
                  }
                  return undefined;
                },
              }}
            >
              {({SelectField}) => (
                <SelectField label="Gender" data={GENDER_OPTIONS} placeholder="Gender..."/>
              )}
            </form.AppField>
            <form.AppField
              name="email"
              validators={{
                onChange: ({value}) => {
                  if (!value) {
                    return 'Email is required'
                  }
                  return undefined;
                },
              }}
            >
              {({TextField}) => (
                <TextField label="Email" placeholder="email@example.com" withAsterisk/>
              )}
            </form.AppField>
            <form.AppField
              name="phone"
              validators={{
                onChange: ({value}) => {
                  if (!value) {
                    return 'Phone is required'
                  }
                  return undefined;
                },
              }}
            >
              {({TextField}) => (
                <TextField label="Phone number" placeholder="Phone number..." withAsterisk/>
              )}
            </form.AppField>

            <form.AppForm>
              <form.SubmitButton>Submit</form.SubmitButton>
            </form.AppForm>
          </FormContainer>
        </form>
      </div>
    </div>
  );
}