import React from 'react';

const SignUpPage = () => {
  return (
    <div style={{
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '320px',
      minHeight: '100vh',
      backgroundColor: '#111111',
      color: 'rgba(255, 255, 255, 0.87)',
      fontFamily: "'Orbitron', sans-serif"
    }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');

          @keyframes roaming-line {
            0% {
              border-top: 2px solid #1cd41c;
              border-right: 2px solid transparent;
              border-bottom: 2px solid transparent;
              border-left: 2px solid transparent;
            }
            25% {
              border-top: 2px solid transparent;
              border-right: 2px solid #1cd41c;
              border-bottom: 2px solid transparent;
              border-left: 2px solid transparent;
            }
            50% {
              border-top: 2px solid transparent;
              border-right: 2px solid transparent;
              border-bottom: 2px solid #1cd41c;
              border-left: 2px solid transparent;
            }
            75% {
              border-top: 2px solid transparent;
              border-right: 2px solid transparent;
              border-bottom: 2px solid transparent;
              border-left: 2px solid #1cd41c;
            }
            100% {
              border-top: 2px solid #1cd41c;
              border-right: 2px solid transparent;
              border-bottom: 2px solid transparent;
              border-left: 2px solid transparent;
            }
          }

          .signup-container {
            background-color: #1a1a1a;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            width: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            animation: roaming-line 1s linear infinite;
            border: 2px solid transparent;
          }

          h2 {
            font-size: 2em;
            margin-bottom: 20px;
            text-align: center;
            transition: text-shadow 0.3s ease;
            color: #1cd41c;
            text-shadow: 0 0 10px #1cd41c, 0 0 20px #1cd41c, 0 0 30px #1cd41c, 0 0 40px #1cd41c;
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
            letter-spacing: 2px;
          }

          .input-field {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #333;
            border-radius: 4px;
            background-color: #2c2c2c;
            color: white;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            border-color: #1cd41c;
            font-family: 'Orbitron', sans-serif;
            letter-spacing: 1px;
          }

          .input-field:focus,
          .input-field:hover {
            transform: translateY(-4px);
            border-color: #1cd41c;
            box-shadow: 0 0 8px 2px rgba(28, 212, 28, 0.8);
          }

          .input-field::placeholder {
            color: #1cd41c;
            font-family: 'Orbitron', sans-serif;
            letter-spacing: 1px;
          }

          p {
            font-size: 1em;
            color: #bbb;
            margin-bottom: 5px;
            transition: transform 0.3s ease, color 0.3s ease;
            font-family: 'Orbitron', sans-serif;
            letter-spacing: 1px;
          }

          p:hover {
            transform: translateY(-4px);
            color: #1cd41c;
          }

          .btn {
            width: 100%;
            padding: 12px;
            background-color: transparent;
            color: #1cd41c;
            font-size: 16px;
            cursor: pointer;
            border-radius: 8px;
            border: 2px solid #1cd41c;
            transition: all 0.3s ease;
            font-weight: 500;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin-top: 10px;
            font-family: 'Orbitron', sans-serif;
            letter-spacing: 2px;
            text-transform: uppercase;
          }

          .btn:hover,
          .btn:focus {
            transform: translateY(-4px);
            box-shadow: 0 0 8px 2px rgba(28, 212, 28, 0.8), 0 0 16px 4px rgba(28, 212, 28, 0.6);
            background-color: #1cd41c;
            color: #fff;
            border-color: #1cd41c;
          }

          .btn-back {
            background-color: transparent;
            color: #888;
            border-color: #888;
            width: 60%;
            margin: 10px auto;
            display: block;
          }

          .btn-back:hover,
          .btn-back:focus {
            background-color: #888;
            color: #fff;
            border-color: #888;
            box-shadow: 0 0 8px 2px rgba(136, 136, 136, 0.8), 0 0 16px 4px rgba(136, 136, 136, 0.6);
          }

          .back-link {
            width: 100%;
            text-decoration: none;
            display: flex;
            justify-content: center;
          }
        `}
      </style>

      <div className="signup-container">
        <h2>Enigma25 Sign Up</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          // Add your signup here
        }}>
          <p>Username</p>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Choose a username" 
            required 
          />
          
          <p>Email</p>
          <input 
            type="email" 
            className="input-field" 
            placeholder="Enter your email" 
            required 
          />
          
          <p>Password</p>
          <input 
            type="password" 
            className="input-field" 
            placeholder="Choose a password" 
            required 
          />
          
          <p>Confirm Password</p>
          <input 
            type="password" 
            className="input-field" 
            placeholder="Confirm your password" 
            required 
          />
          
          <button type="submit" className="btn">Create Account</button>
        </form>
        <button
          type="button"
          className="btn btn-back"
          onClick={() => {
            // Add your navigation here
          }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
