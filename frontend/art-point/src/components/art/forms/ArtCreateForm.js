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

import { AddPhotoAlternate, DescriptionOutlined, TitleOutlined } from '@mui/icons-material';
import { Alert, Button, Card, CardActions, CardContent, Collapse, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function ArtCreateForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const [alert, setAlert] = useState(false);
  const onSubmit = data => {
    //console.log(data);

    const artJSON = JSON.stringify({
      'title': data.title,
      'description': data.description,
      'price': data.price,
      'artCategory': 'test',
      'owner': {
        id: user.id
      }
    });

    const artJSONblob = new Blob([artJSON], {
      type: 'application/json'
    });

    let multipartFormData = new FormData();
    multipartFormData.append('art', artJSONblob);
    multipartFormData.append('image', data.image[0]);
    //console.log(data.image[0]);

    fetch('http://localhost:8080/art', {
      method: 'POST',
      body: multipartFormData,
      headers: {
        Authorization: "Bearer " + token
      }
    }).then(res => {
      setAlert(true);
    }).catch(err => {
      console.log(err);
    });
  }
  console.log(errors);

  if (!isLoggedIn) {
    return (
      <Navigate to="/signin" />
    );
  }
  return (
    <div>
      <Typography variant="h4" gutterBottom>New Art Details</Typography>
      <Collapse in={alert}>
        <Alert>Your Art has been added!</Alert>
      </Collapse>
      <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>

        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
              <TitleOutlined/>
            <div>
              <TextField
                fullWidth
                variant="standard"
                label="title"
                {...register("title", { required: true, maxLength: 100 })}
              />
            </div>
            </Box>
            {/* <input type="text" placeholder="Title" {...register("title", { required: true, maxLength: 100 })} />
    <br /> */}

            <div>
             <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
               <DescriptionOutlined />
              <TextField
                fullWidth
                variant="standard"
                multiline
                maxRows={4}
                label="description"
                {...register("description", { required: true, maxLength: 500 })}
              />
              </Box>
            </div>

            {/* <textarea placeholder="Description" {...register("description", { required: true, maxLength: 500 })} />
    <br /> */}

            <div>
              <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                <Typography variant="h5" paddingLeft={0.6} paddingRight={1}>₹</Typography>
                <TextField
                  fullWidth
                  variant="standard"
                  label="price"
                  {...register("price", { required: true })}
                />
              </Box>
            </div>

            {/* <input type="number" placeholder="Price" {...register("price", { required: true })} />
    <br /> */}
            <div>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop:2, paddingBottom:1}}>
                <AddPhotoAlternate/>
                <Typography>Upload Art Image</Typography>
              </Box>
              <input type="file" alt="Art Image" placeholder="Upload Art Image" {...register("image", { required: true })} />
            </div>

          </CardContent>
          <CardActions>
            <Button variant="contained" type="submit">Submit</Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
}