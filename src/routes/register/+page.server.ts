import { API } from '$lib/index'
/** @type {import('./$types').Actions} */


export const actions = {	
    default: async ({request}) => {

      const data = await request.formData();
      let gradyear = data.get('gradyear')?.valueOf()
      if (data.get('institype') == 'school'){
         gradyear = 2024 + (12 - Number(data.get('grade')))
      }

      await fetch(API.register,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          "username":data.get('username'),
          "email":data.get('email'),
          "password":data.get('password'),
          "phone":data.get('phone'),
          "college":data.get('college'),
          "gradyear":gradyear,
          "institype":data.get('institype'),
          "stream":data.get('stream')
        }) 
      }).then(res => res.json())
      .then(res => {
          return res.registered
      }).catch(err => {
          console.log(err)
      })
        

  }
};