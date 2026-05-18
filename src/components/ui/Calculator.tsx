'use client';

import { useState } from 'react';

const Calculator = () => {
  const [dogAge, setDogAge] = useState(3);
  const [dogAgeMonths, setDogAgeMonths] = useState(0);
  const [dogSize, setDogSize] = useState('medium');
  const [dogName, setDogName] = useState('');
  const [humanAge, setHumanAge] = useState<number | null>(null);
  const [ageStage, setAgeStage] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateHumanAge = () => {
    const totalAge = dogAge + dogAgeMonths / 12;
    if (totalAge <= 0) return;

    let result = 0;
    let stage = '';

    if (dogSize === 'small') {
      if (totalAge <= 1) {
        result = totalAge * 15;
        stage = 'Puppy';
      } else if (totalAge <= 2) {
        result = 15 + (totalAge - 1) * 9;
        stage = 'Young Adult';
      } else {
        result = 24 + (totalAge - 2) * 4;
        stage = totalAge < 10 ? 'Adult' : totalAge < 14 ? 'Senior' : 'Geriatric';
      }
    } else if (dogSize === 'medium') {
      if (totalAge <= 1) {
        result = totalAge * 15;
        stage = 'Puppy';
      } else if (totalAge <= 2) {
        result = 15 + (totalAge - 1) * 9;
        stage = 'Young Adult';
      } else {
        result = 24 + (totalAge - 2) * 5;
        stage = totalAge < 8 ? 'Adult' : totalAge < 11 ? 'Senior' : 'Geriatric';
      }
    } else {
      if (totalAge <= 1) {
        result = totalAge * 14;
        stage = 'Puppy';
      } else if (totalAge <= 2) {
        result = 14 + (totalAge - 1) * 10;
        stage = 'Young Adult';
      } else {
        result = 24 + (totalAge - 2) * 7;
        stage = totalAge < 6 ? 'Adult' : totalAge < 9 ? 'Senior' : 'Geriatric';
      }
    }

    setHumanAge(Math.round(result));
    setAgeStage(stage);
    setIsCalculated(true);
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Puppy': return '#228B22';
      case 'Young Adult': return '#0000EE';
      case 'Adult': return '#CC3300';
      case 'Senior': return '#B8860B';
      case 'Geriatric': return '#8B0000';
      default: return '#333';
    }
  };

  return (
    <section id="calculator" className="calc-section">
      <h2>Dog Years to Human Years Calculator</h2>
      <p className="text-muted mb-15">
        Enter your dog&apos;s age and select their size to calculate their equivalent human age.
        Our calculator uses scientifically-backed formulas based on veterinary research.
      </p>

      <div className="form-group">
        <label htmlFor="dogAge">Dog&apos;s Age (Years): <strong>{dogAge}</strong></label>
        <input
          id="dogAge"
          type="range"
          min="0"
          max="20"
          value={dogAge}
          onChange={(e) => setDogAge(parseInt(e.target.value))}
          className="range-slider"
        />
        <div className="range-labels">
          <span>0 years</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20 years</span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="dogAgeMonths">Additional Months: <strong>{dogAgeMonths}</strong></label>
        <input
          id="dogAgeMonths"
          type="range"
          min="0"
          max="11"
          value={dogAgeMonths}
          onChange={(e) => setDogAgeMonths(parseInt(e.target.value))}
          className="range-slider"
        />
        <div className="range-labels">
          <span>0 months</span>
          <span>3</span>
          <span>6</span>
          <span>9</span>
          <span>11 months</span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="dogSize">Dog Size:</label>
        <select
          id="dogSize"
          className="form-control"
          value={dogSize}
          onChange={(e) => setDogSize(e.target.value)}
        >
          <option value="small">Small Dog (Under 20 lbs) &mdash; e.g. Chihuahua, Pomeranian, Yorkie</option>
          <option value="medium">Medium Dog (20-50 lbs) &mdash; e.g. Beagle, Border Collie, Bulldog</option>
          <option value="large">Large Dog (Over 50 lbs) &mdash; e.g. German Shepherd, Golden Retriever, Great Dane</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dogName">Your Dog&apos;s Name (optional):</label>
        <input
          id="dogName"
          type="text"
          className="form-control"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
          placeholder="e.g. Buddy, Luna, Max..."
        />
      </div>

      <div className="form-group">
        <button onClick={calculateHumanAge} className="btn btn-primary btn-large">
          Calculate Human Age
        </button>
      </div>

      {isCalculated && humanAge !== null && (
        <div className="result-box">
          <div className="result-label">
            {dogName ? dogName : 'Your dog'} is approximately
          </div>
          <div className="result-age">{humanAge}</div>
          <div className="result-label">human years old</div>
          <div
            className="result-stage"
            style={{ color: getStageColor(ageStage), borderColor: getStageColor(ageStage) }}
          >
            Life Stage: {ageStage}
          </div>
          <div className="result-equivalent mt-10">
            That means your {dogSize === 'small' ? 'small' : dogSize === 'medium' ? 'medium' : 'large'} dog is equivalent
            to a {humanAge}-year-old human. {ageStage === 'Puppy' ? 'They are still a baby &mdash; enjoy every moment!' :
              ageStage === 'Young Adult' ? 'They are in their prime &mdash; full of energy and vitality!' :
              ageStage === 'Adult' ? 'They are mature and steady &mdash; the best companion years!' :
              ageStage === 'Senior' ? 'They are getting older &mdash; give them extra love and care!' :
              'They are in their golden years &mdash; cherish every day together!'}
          </div>
        </div>
      )}

      <div className="text-small text-muted mt-10">
        <strong>Note:</strong> This calculator uses modern veterinary research data. The old &quot;1 dog year = 7 human years&quot;
        rule is a myth. Dogs age much faster in their first two years, and aging rates vary by size. Consult your
        veterinarian for a more personalized assessment of your dog&apos;s health and life stage.
      </div>
    </section>
  );
};

export default Calculator;