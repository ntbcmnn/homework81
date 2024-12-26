import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { shortenLink } from '../../store/thunks/linksThunk.ts';
import { selectLoading } from '../../store/slices/linksSlice.ts';

const initialState = {
  originalUrl: '',
};

const LinkForm = () => {
  const [form, setForm] = useState({...initialState});
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);

  const onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    if (form.originalUrl.trim().length === 0) {
      toast.error('URL required!');
      return;
    }

    dispatch(shortenLink(form.originalUrl));
    setForm({...initialState});
    toast.success('Link shortened successfully!');
  };

  const onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const {name, value} = e.target;
    setForm((prevState) => ({...prevState, [name]: value}));
  };

  return (
    <form onSubmit={onFormSubmit} className="m-5 text-center">
      <h1 className="text-center mb-4">Shorten your link!</h1>
      <div className="my-4">
        <input
          type="url"
          className="form-control"
          id="originalUrl"
          name="originalUrl"
          value={form.originalUrl}
          onChange={onInputChange}
          placeholder="Your URL..."
        />
      </div>
      <button
        type="submit"
        className="btn btn-dark d-inline-flex gap-2 fs-5"
        disabled={isLoading}
      >
        Crop
        <i className="bi bi-scissors"></i>
      </button>
    </form>
  );
};

export default LinkForm;