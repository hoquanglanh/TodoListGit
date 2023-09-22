function TodoItem() {
    return (
      <div className="row item">
        <div className="col-10 item-title">Học Reactjs</div>
        <div className="col-2 item-group-button">
          <button class="btn btn-outline-danger">
            <i class="fa fa-trash"></i>
          </button>
          <button class="btn btn-outline-success">
            <i class="fa fa-edit"></i>
          </button>
        </div>
      </div>
    );
  }
  
  export default TodoItem;