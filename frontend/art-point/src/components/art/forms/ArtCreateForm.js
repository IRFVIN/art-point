/*
import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";

const ArtCreateForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <TextField id="outlined-basic" label="Outlined" variant="outlined" {...field} />}
      />
      <Controller
        name="select"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
        />}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ArtCreateForm;
*/


/*
Art{
id	integer($int64)
title	string
description	string
price	number($double)
artCategory	string
owner	User{...}
}
*/

import React from 'react';
import { useForm } from 'react-hook-form';

export default function ArtCreateForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Title" {...register("Title", {required: true, maxLength: 100})} />
      <textarea {...register("Description", {required: true, maxLength: 500})} />
      <input type="number" placeholder="Price" {...register("Price", {required: true})} />

      <input type="submit" />
    </form>
  );
}