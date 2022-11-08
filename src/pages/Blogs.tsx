import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export default function Blogs({}: Props) {
  return (
    <div>
      BlogsPage <br />
      <Link to="/blogs:1234">Blog 1234</Link>
    </div>
  );
}
