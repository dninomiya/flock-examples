import { useFieldArray, useForm } from 'react-hook-form';
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi';

const DynamicForm = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      tags: [
        {
          value: '',
        },
      ],
    },
  });

  const { fields, insert, remove } = useFieldArray({
    control,
    name: 'tags',
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <form>
        <h2 className="mb-2">タイトル</h2>
        <input
          type="text"
          autoComplete="off"
          className="bg-transparent rounded border mb-6"
          {...register('title')}
        />
        <h2 className="mb-2">タグ</h2>
        <div className="space-y-2">
          {fields.map((field, index) => (
            <div key={field.id}>
              <div className="flex items-center space-x-2">
                <input
                  className="bg-transparent rounded border"
                  type="text"
                  autoComplete="off"
                  {...register(`tags.${index}.value`, {
                    required: '必須入力です',
                    maxLength: {
                      value: 80,
                      message: '最大80文字です',
                    },
                  })}
                />
                {fields.length > 1 && (
                  <button type="button" onClick={() => remove(index)}>
                    <HiOutlineMinusCircle className="text-xl opacity-60" />
                  </button>
                )}
                <button
                  onClick={() =>
                    insert(index + 1, {
                      value: '',
                    })
                  }
                  type="button"
                >
                  <HiOutlinePlusCircle className="text-xl opacity-60" />
                </button>
              </div>
              {errors.tags?.[index]?.value && (
                <p className="text-red-500 text-sm">
                  {errors.tags?.[index]?.value?.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </form>
      <div>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default DynamicForm;
