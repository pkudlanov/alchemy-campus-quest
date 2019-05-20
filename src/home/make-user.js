
function makeUser(formData){
    const user = {
        name: formData.get('name'),
        title: formData.get('title'),
        grade: 83,
        coffee: 2
    };
    return user;
}

export default makeUser;