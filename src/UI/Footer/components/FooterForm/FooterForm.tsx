'use client';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './FooterForm.scss';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  number_or_email: string;
  service_titles: string[];
  review: string;
}

const FooterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    number_or_email: '',
    service_titles: [],
    review: '',
  });
  const [options, setOptions] = useState([]);
  const [placeholderText, setPlaceholderText] = useState(
      'Какая услуга вас интересует? (Можно выбрать несколько)',
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getOptions = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service/get/`);
      setOptions(
          data.map((service: any) => {
            return { value: service.title, label: service.title };
          }),
      );
    } catch (error) {
      toast.error('Не удалось загрузить параметры.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/form/create/`, formData);
      toast.success('Форма успешно отправлена!');
      setFormData({
        name: '',
        number_or_email: '',
        service_titles: [],
        review: '',
      });
      router.push('?=thank-you');
    } catch (error: any) {
      const errorMessage = error.response?.data?.message;

      if (errorMessage === "Rate limit exceeded") {
        toast.error("Превышен лимит запросов");
      } else {
        toast.error(errorMessage || "Произошла непредвиденная ошибка");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (type: keyof FormData, value: string | string[]) => {
    setFormData((prev) => {
      const updatedFormData = { ...prev, [type]: value };
      return updatedFormData;
    });
  };

  useEffect(() => {
    getOptions();

    const handleResize = () => {
      if (window.innerWidth <= 475) {
        setPlaceholderText('Какая услуга вас интересует?');
      } else {
        setPlaceholderText('Какая услуга вас интересует? (Можно выбрать несколько)');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div className="footer-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
                value={formData.name}
                type="text"
                name="name"
                id="name"
                required
                onChange={(e) => handleChange('name', e.target.value)}
            />
            <label htmlFor="name">Ваше имя</label>
          </div>

          <div className="input-field">
            <input
                value={formData.number_or_email}
                type="text"
                name="phone"
                id="phone"
                required
                onChange={(e) => handleChange('number_or_email', e.target.value)}
            />
            <label htmlFor="phone">Ваш номер телефона или E-mail</label>
          </div>

          <div className="input-field">
            <Select
                name="service"
                id="service"
                placeholder={placeholderText}
                options={options}
                isMulti
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: '#00A1AF',
                    primary: '#00A1AF',
                  },
                })}
                styles={{
                  input: (base) => ({
                    ...base,
                    margin: 0,
                    padding: 0,
                  }),
                  placeholder: (styles) => ({
                    ...styles,
                    color: '#6989aa',
                    fontSize: '20px',
                    height: '25px',
                    '@media (max-width: 768px)': {
                      fontSize: '18px',
                    },
                    '@media (max-width: 576px)': {
                      fontSize: '14px',
                    }
                  }),
                  valueContainer: (styles) => ({
                    ...styles,
                    paddingLeft: "18px",
                    height: '50px',
                  }),
                  menuList: (styles) => ({
                    ...styles,
                    width: '100%',
                    display: 'grid',
                    // padding: '10px',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '10px',
                  }),
                  indicatorSeparator: () => ({
                    display: 'none',
                  }),
                  indicatorsContainer: (provided) => ({
                    ...provided,
                    height: '50px',
                  }),
                  option: (styles) => ({
                    ...styles,
                    color: 'black',
                    backgroundColor: '#D9E1EA',
                    borderRadius: '20px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ':active': { backgroundColor: '#6989AA' },
                  }),
                  control: (styles) => ({
                    ...styles,
                    color: 'black',
                    height: 50,
                    minHeight: 50,
                    padding: 0,
                    ':hover': { borderColor: 'grey' },
                  }),
                  multiValue: (styles) => ({
                    ...styles,
                    color: 'black',
                    backgroundColor: '#D9E1EA',
                    borderRadius: '20px',
                    textAlign: 'center',
                    fontSize: '18px',
                    padding: '2px',
                  }),
                  multiValueLabel: (style) => ({
                    ...style,
                    display: 'flex',
                    alignItems: 'center',
                  }),
                  multiValueRemove: (styles) => ({
                    ...styles,
                    cursor: 'pointer',
                    ':hover': {
                      backgroundColor: '#D9E1EA',
                      borderRadius: '0 20px 20px 0',
                    },
                  }),
                }}
                value={formData.service_titles.map((title) => ({
                  value: title,
                  label: title,
                }))}
                onChange={(option) => {
                  handleChange(
                      'service_titles',
                      option.map((val) => val.value),
                  );
                }}
            />
          </div>

          <div className="input-field">
          <textarea
              value={formData.review}
              name="comment"
              id="comment"
              required
              onChange={(e) => handleChange('review', e.target.value)}
          />
            <p className="text-counter">{`${formData.review.length}/550`}</p>
            <label htmlFor="comment">Оставьте комментарий или задайте вопрос</label>
          </div>

          <p className="form-warning">Оставляя заявку вы соглашаетесь на обработку ваших данных</p>
          <button
              className={`form-button ${loading ? 'loading' : ''}`}
              type="submit"
              disabled={loading}
          >
            {loading ? 'Подождите...' : 'Отправить'}
          </button>
        </form>
        <ToastContainer />
      </div>
  );
};

export default FooterForm;
