import { toast } from 'react-toastify';

const notify = (() => {
  function alertToast(message, _theme) {
    toast.info(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
      theme: _theme,
    });
  }

  function successToast(message) {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
    });
  }

  return {
    alertToast,
    successToast,
  };
})();

export default notify;
