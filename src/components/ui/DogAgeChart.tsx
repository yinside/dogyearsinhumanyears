const DogAgeChart = () => {
  const sizes = ['Small Dog', 'Medium Dog', 'Large Dog'];
  const ages = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const getHumanAge = (dogAge: number, size: string): number => {
    if (size === 'Small Dog') {
      if (dogAge <= 1) return Math.round(dogAge * 15);
      if (dogAge <= 2) return Math.round(15 + (dogAge - 1) * 9);
      return Math.round(24 + (dogAge - 2) * 4);
    }
    if (size === 'Medium Dog') {
      if (dogAge <= 1) return Math.round(dogAge * 15);
      if (dogAge <= 2) return Math.round(15 + (dogAge - 1) * 9);
      return Math.round(24 + (dogAge - 2) * 5);
    }
    if (dogAge <= 1) return Math.round(dogAge * 14);
    if (dogAge <= 2) return Math.round(14 + (dogAge - 1) * 10);
    return Math.round(24 + (dogAge - 2) * 7);
  };

  const getLifeStage = (dogAge: number, size: string): string => {
    if (size === 'Small Dog') {
      if (dogAge < 1) return 'Puppy';
      if (dogAge < 2) return 'Young Adult';
      if (dogAge < 10) return 'Adult';
      if (dogAge < 14) return 'Senior';
      return 'Geriatric';
    }
    if (size === 'Medium Dog') {
      if (dogAge < 1) return 'Puppy';
      if (dogAge < 2) return 'Young Adult';
      if (dogAge < 8) return 'Adult';
      if (dogAge < 11) return 'Senior';
      return 'Geriatric';
    }
    if (dogAge < 1) return 'Puppy';
    if (dogAge < 2) return 'Young Adult';
    if (dogAge < 6) return 'Adult';
    if (dogAge < 9) return 'Senior';
    return 'Geriatric';
  };

  const getStageStyle = (stage: string) => {
    switch (stage) {
      case 'Puppy': return { color: '#228B22', bg: '#f0fff0' };
      case 'Young Adult': return { color: '#0000EE', bg: '#f0f0ff' };
      case 'Adult': return { color: '#CC3300', bg: '#fff5f0' };
      case 'Senior': return { color: '#B8860B', bg: '#fffdf0' };
      case 'Geriatric': return { color: '#8B0000', bg: '#fff0f0' };
      default: return { color: '#333', bg: '#fff' };
    }
  };

  return (
    <section id="age-chart" className="section-box">
      <h2>Dog Age Chart &mdash; Dog Years to Human Years</h2>
      <p className="text-muted mb-15">
        This comprehensive chart shows the conversion from dog years to human years across different dog sizes.
        Note how the aging rate differs significantly between small, medium, and large dogs.
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table className="table-old">
          <thead>
            <tr>
              <th>Dog Age</th>
              {sizes.map((size) => (
                <th key={size}>
                  {size}
                  <br />
                  <span style={{ fontWeight: 'normal', fontSize: '11px', color: '#777' }}>
                    ({size === 'Small Dog' ? '&lt;20 lbs' : size === 'Medium Dog' ? '20-50 lbs' : '&gt;50 lbs'})
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ages.map((age) => (
              <tr key={age}>
                <td>
                  <strong>{age} {age === 1 ? 'year' : 'years'}</strong>
                  {age === 0.5 && <span style={{ fontSize: '11px', color: '#777', marginLeft: '4px' }}>(6 months)</span>}
                </td>
                {sizes.map((size) => {
                  const humanAge = getHumanAge(age, size);
                  const stage = getLifeStage(age, size);
                  const style = getStageStyle(stage);
                  return (
                    <td key={size} style={{ backgroundColor: style.bg }}>
                      <strong style={{ color: style.color }}>{humanAge} human years</strong>
                      <br />
                      <span style={{ fontSize: '11px', color: style.color }}>({stage})</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-small text-muted mt-10">
        <strong>Chart Key:</strong>{' '}
        <span style={{ color: '#228B22' }}>Puppy (0-1 yr)</span> &rarr;{' '}
        <span style={{ color: '#0000EE' }}>Young Adult (1-2 yr)</span> &rarr;{' '}
        <span style={{ color: '#CC3300' }}>Adult</span> &rarr;{' '}
        <span style={{ color: '#B8860B' }}>Senior</span> &rarr;{' '}
        <span style={{ color: '#8B0000' }}>Geriatric</span>
      </div>
    </section>
  );
};

export default DogAgeChart;