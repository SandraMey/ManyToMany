import './deletebuton.css';

const DeleteButon = ({ handledelete }) => {
  return (
    <div className="deletbut">
      <button onClick={handledelete}>Delete</button>
    </div>
  );
};

export default DeleteButon;
