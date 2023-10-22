import { Fragment } from "react";
import {
  FieldValueDataTypes,
  resumeState,
  useStore,
  type ResumeState,
} from "@/app/store";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { titleCase } from "@/lib/utils";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ToDoComponent = ({ value }: { value: FieldValueDataTypes }) => {
  return (
    <Fragment>
      <span className="text-xs">
        {`// TODO: implement ${typeof value} controller`}
      </span>
      <Input value={value.toString()} disabled />
    </Fragment>
  );
};

const ResumeFormField = ({
  form,
  fieldName,
  value,
  path,
}: {
  form: ReturnType<typeof useForm<z.infer<typeof resumeState>>>;
  fieldName: string;
  value: FieldValueDataTypes;
  path: string;
}) => {
  const { update } = useStore();
  if (fieldName === "include") return null;
  return (
    <FormField
      name={fieldName as keyof ResumeState}
      control={form.control}
      render={({ field }) => {
        field.onChange = (e) => {
          console.log("e.target.value", e.target.value);
          update(path, e.target.value as FieldValueDataTypes);
          form.setValue(path as keyof ResumeState, e.target.value);
        };
        return (
          <FormItem className="space-y-2">
            <div className="mb-2 grid w-full gap-1.5">
              <Label htmlFor={field.name}>{titleCase(fieldName)}</Label>
              <FormControl>
                {typeof value === "string" ? (
                  fieldName === "summary" ? (
                    <Textarea
                      placeholder="Type your message here."
                      value={value}
                      onChange={field.onChange}
                    />
                  ) : (
                    <Input value={value} onChange={field.onChange} />
                  )
                ) : (
                  <ToDoComponent value={value} />
                )}
              </FormControl>
            </div>
          </FormItem>
        );
      }}
    />
  );
};

export { ResumeFormField };
