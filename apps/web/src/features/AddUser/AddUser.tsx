import {Link} from "@tanstack/react-router";
import {Icon} from "@repo/ui/atoms";
import {AnyFieldApi, useForm} from "@tanstack/react-form";

function FieldInfo({field}: { field: AnyFieldApi }) {
    return (
        <>
            {field.state.meta.isTouched && !field.state.meta.isValid ? (
                <em>{field.state.meta.errors.join(',')}</em>
            ) : null}
            {field.state.meta.isValidating ? 'Validating...' : null}
        </>
    )
}

export default function AddUser() {
    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        },
        onSubmit: async ({value}) => {
            // Do something with form data
            console.log(value)
        },
    })

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
                        e.preventDefault();
                        e.stopPropagation();
                        form.handleSubmit();
                    }}
                >
                    <div>
                        {/* A type-safe field component*/}
                        <form.Field
                            name="firstName"
                            validators={{
                                onChange: ({value}) =>
                                    !value ? 'A first name is required': undefined,
                            }}
                            children={(field) => {
                                // Avoid hasty abstractions. Render props are great!
                                return (
                                    <>
                                        <label htmlFor={field.name}>First Name:</label>
                                        <input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                        <FieldInfo field={field}/>
                                    </>
                                )
                            }}
                        />
                    </div>
                    <div>
                        <form.Field
                            name="lastName"
                            children={(field) => (
                                <>
                                    <label htmlFor={field.name}>Last Name:</label>
                                    <input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    <FieldInfo field={field}/>
                                </>
                            )}
                        />
                    </div>
                    <form.Subscribe
                        selector={(state) => [state.canSubmit, state.isSubmitting]}
                        children={([canSubmit, isSubmitting]) => (
                            <>
                                <button type="submit" disabled={!canSubmit}>
                                    {isSubmitting ? '...' : 'Submit'}
                                </button>
                                <button
                                    type="reset"
                                    onClick={(e) => {
                                        // Avoid unexpected resets of form elements (especially <select> elements)
                                        e.preventDefault()
                                        form.reset()
                                    }}
                                >
                                    Reset
                                </button>
                            </>
                        )}
                    />
                </form>
            </div>
        </div>
    );
}