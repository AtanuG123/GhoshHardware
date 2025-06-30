import React, { useState } from "react";
import { User, Mail, Phone, MapPin, Edit2, Save, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    Name: user?.Name || "",
    Email: user?.Email || "",
    Phone: user?.Phone || "",
    Address: user?.Address || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // In a real app, this would update the user data
    updateProfile(formData);
    // console.log("Saving user data:", formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      Name: user?.Name || "",
      Email: user?.Email || "",
      Phone: user?.Phone || "",
      Address: user?.Address || "",
    });
    setIsEditing(false);
  };
  // user.isAdmin=false;
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600">Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-blue-950 px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <User className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">{user.Name}</h1>
                  <p className="text-white">
                    {user.Email === import.meta.env.VITE_ADMIN
                      ? "Administrator"
                      : "Customer"}
                  </p>
                </div>
              </div>
              {user.Email === import.meta.env.VITE_ADMIN ? (
                <div>
                  <button
                    onClick={() => {
                      navigate("/admin");
                    }}
                    className="bg-white cursor-pointer bg-opacity-20 hover:bg-opacity-30 text-black px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    {/* <Edit2 className="h-4 w-4" /> */}
                    <span>Access Admin</span>
                  </button>
                </div>
              ) : (
                <div>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="bg-white cursor-pointer bg-opacity-20 hover:bg-opacity-30 text-black px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <Edit2 className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                      >
                        <Save className="h-4 w-4" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                      >
                        <X className="h-4 w-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Profile Information */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Profile Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-2" />
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                    {user.Name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-2" />
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                    {user.Email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-2" />
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.Phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                    {user.Phone}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-2" />
                  Address
                </label>
                {isEditing ? (
                  <textarea
                    name="address"
                    rows={3}
                    value={formData.Address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                    {user.Address}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div className="border-t border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Account Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-800 font-medium">Account Status</div>
                <div className="text-green-600">Active</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-800 font-medium">Account Type</div>
                <div className="text-blue-600">
                  {user.Email === "ghoshavi924@gmail.com"
                    ? "Administrator"
                    : "Customer"}
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-purple-800 font-medium">Member Since</div>
                <div className="text-purple-600">January 2024</div>
              </div>
            </div>
          </div>

          {/* Order History Preview */}
          <div className="border-t border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Recent Orders
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Order #12345</div>
                  <div className="text-sm text-gray-600">2 items • ₹1,580</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">
                    Delivered
                  </div>
                  <div className="text-xs text-gray-500">Jan 15, 2024</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Order #12344</div>
                  <div className="text-sm text-gray-600">1 item • ₹650</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-blue-600">
                    Processing
                  </div>
                  <div className="text-xs text-gray-500">Jan 20, 2024</div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All Orders →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
