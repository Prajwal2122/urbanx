const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// ✅ Register User
exports.registerUser = async (req, res) => {
  try {
    // 👇 Debug logs added here
    console.log("✅ Register API called");
    console.log("📩 Data received from frontend:", req.body);

    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const newUser = await User.create({ name, email, password, role });

    console.log("✅ New user created:", newUser); // 👈 Optional debug

    res.status(201).json({
      message: 'User registered successfully',
      token: generateToken(newUser),
      user: {
        id: newUser._id,
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error("❌ Error in register:", err); // 👈 Optional debug
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ✅ Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
      message: 'Login successful',
      token: generateToken(user),
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("❌ Error in login:", err); // 👈 Optional debug
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
