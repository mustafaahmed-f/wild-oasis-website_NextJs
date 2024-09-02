import ProfileForm from "@/app/_Components/ProfileForm";
import SelectCountry from "@/app/_Components/SelectCountry";
import Image from "next/image";
import React, { useEffect } from "react";
interface pageProps {}

const Profile: React.FC<pageProps> = ({}) => {
  const countryFlag = "pt.jpg";
  const nationality = "portugal";
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <ProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </ProfileForm>
    </div>
  );
};

export default Profile;
