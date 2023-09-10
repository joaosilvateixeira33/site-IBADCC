document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animacao",{
        speed:200,
        loop:true
    }).type('Ampliamos', {DelayNode: 900})
    .delete(10)
    .type('Inovamos', {DelayNode: 900})
    .go()
})