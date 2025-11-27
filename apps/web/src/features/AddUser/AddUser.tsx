import {Link, useRouter} from "@tanstack/react-router";
import {Icon} from "@repo/ui/atoms";
import {useAppForm, FormContainer} from "@repo/ui/molecules";
import {notifications} from '@repo/ui/atoms';
import {useCreateUser} from "@repo/hooks/mutations";

const GENDER_OPTIONS = [
    {label: 'Male', value: 'M'},
    {label: 'Female', value: 'F'},
]

export default function AddUser() {
    const router = useRouter();
    const { mutateAsync: createUser } = useCreateUser();

    const form = useAppForm({
        defaultValues: {
            fullName: 'John Doe',
            gender: 'M',
            email: 'johndou@example.com',
            phone: '08412345678',
        },
        onSubmit: async ({value}) => {
            console.log(JSON.stringify(value, null, 2));
            notifications.show({
                id: 'create-user-success',
                title: "Notification",
                message: `Creating user...`,
                loading: true,
            });
            const res = await createUser(value);
            notifications.update({
                id: 'create-user-success',
                loading: false,
                color: 'teal',
                title: 'Success',
                message: `User has been created successfully! ID: ${res.id}`,
            });
            router.navigate({ to: "/users"});
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
            <div className="mt-10">
                <div className="max-w-md mx-auto">
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
        </div>
    );
}