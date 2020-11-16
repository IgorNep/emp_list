import React, { Fragment, useState } from 'react';

const EmpData = ({ employees }) => {
  const [abc, setAbc] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  const empList = [];
  abc.split('').forEach((letter) => {
    const newBox = { title: letter, abcEmployees: [] };
    empList.push(newBox);

    employees.forEach((emp) => {
      if (emp.lastName.charAt(0) === newBox.title) {
        newBox.abcEmployees.push(emp);
      }
    });
  });

  return (
    <div className="emp-data">
      <h2>Employees</h2>
      <div className="line"></div>
      <div className="emp-abc">
        {empList.map((item) => (
          <div className="emp-item" key={item.title}>
            <h3>{item.title}</h3>
            <div>
              {item.abcEmployees.length === 0
                ? '----'
                : item.abcEmployees
                    .sort(function (a, b) {
                      return a > b;
                    })
                    .map((user) => (
                      <p key={user.id}>
                        {user.lastName}
                        {user.firstName}
                      </p>
                    ))}
            </div>
          </div>
        ))}{' '}
      </div>
    </div>
  );
};

export default EmpData;
