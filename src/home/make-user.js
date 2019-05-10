
function makeUser(formData){
    const user = {
        name: formData.get('name'),
        title: formData.get('title'),
        grade: 9,
        coffee: 2
    };
    return user;
}

export default makeUser;