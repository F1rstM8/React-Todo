import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/weatherSlice";
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <header className="app-header">
      <div className="logo">📝 Redux Todo</div>

      <div className="weather-widget">
        {isLoading && <span>Завантаження погоди...</span>}
        {error && <span className="error">{error}</span>}
        {data && (
          <div className="weather-info">
            <span>🌍 Краків:</span>
            <span>🌡️ {data.temperature}°C</span>
            <span>💨 {data.windspeed} км/год</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
