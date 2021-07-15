import React from 'react'

function card({imagen, titulo, descripcion}) {
    return (
        <div>
            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={ imagen } class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{titulo}</h5>
        <p class="card-text">{descripcion}</p>
        <p class="card-text"><small class="text-muted"></small></p>
      </div>
    </div>
  </div>
</div>
            
        </div>
    )
}

export default card
