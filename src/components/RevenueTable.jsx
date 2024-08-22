const data = [
  { id: 'revenue', name: 'Выручка, руб', current: 500521, yesterday: 480521, weekDay: 4805121, change: 4 },
  { id: 'cash', name: 'Наличные', current: 300000, yesterday: 300000, weekDay: 300000, change: 0 },
  { id: 'noncash', name: 'Безналичный расчет', current: 100000, yesterday: 100000, weekDay: 100000, change: 0 },
  { id: 'credit', name: 'Кредитные карты', current: 100521, yesterday: 100521, weekDay: 100521, change: 0 },
  { id: 'avgCheck', name: 'Средний чек, руб', current: 1300, yesterday: 900, weekDay: 900, change: 44 },
  { id: 'avgGuest', name: 'Средний гость, руб', current: 1200, yesterday: 800, weekDay: 800, change: 50 },
  { id: 'removeAfter', name: 'Удаления из чека (после оплаты), руб', current: 1000, yesterday: 1100, weekDay: 900, change: -9 },
  { id: 'removeBefore', name: 'Удаления из чека (до оплаты), руб', current: 1300, yesterday: 1300, weekDay: 900, change: 0 },
  { id: 'checkCount', name: 'Количество чеков', current: 34, yesterday: 36, weekDay: 34, change: -6 },
  { id: 'guestCount', name: 'Количество гостей', current: 34, yesterday: 36, weekDay: 32, change: -6 },
];

const RevenueTable = ({ onRowSelect }) => {
  const formatValue = (value) => {
    return typeof value === 'number' ? value.toLocaleString('ru-RU') : value;
  };

  const getChangeClass = (change) => {
    if (change > 0) return 'positive';
    if (change < 0) return 'negative';
    return '';
  };

  return (
    <table className="revenue-table">
      <thead>
        <tr>
          <th>Показатель</th>
          <th>Текущий день</th>
          <th>Вчера</th>
          <th>Этот день недели</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} onClick={() => onRowSelect(row)}>
            <td>{row.name}</td>
            <td>{formatValue(row.current)}</td>
            <td>
              {formatValue(row.yesterday)}
              <span className={`change ${getChangeClass(row.change)}`}>
                {row.change > 0 ? '+' : ''}{row.change}%
              </span>
            </td>
            <td>{formatValue(row.weekDay)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RevenueTable;