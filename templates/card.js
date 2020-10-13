function card(name, type, id, email, paramName, paramValue) {
    let icon = '';
    switch (type) {
        case ('Manager'): icon = '<i class="fas fa-user-tie"></i>';
        break
        case ('Engineer'): icon = '<i class="fa fa-laptop-code"></i>';
        break
        case ('Intern'): icon = '<i class="fas fa-graduation-cap"></i>';
        break
    }
    return `
<div class="col-md-4">
    <div class="card bg-info border-light shadow mb-3 text-center" style="max-width: 18rem; height: 22rem;">
        <div class="card-header text-white">
            <h2>${name}</h2>
            <h3>${icon} ${type}</h3>
        </div>
        <div class="card-body bg-light align-content-center flex-wrap">
            <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id} </li>
                    <li class="list-group-item">Email: ${email} </li>
                    <li class="list-group-item">${paramName}: ${paramValue} </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`
}

module.exports.card = card;