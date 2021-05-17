import React from "react";

export default function Profile({ profile }) {
  const { firstName, lastName, role, id } = profile;
  return (
    <div>
      {firstName},{lastName},{role},{id},
    </div>
  );
}
