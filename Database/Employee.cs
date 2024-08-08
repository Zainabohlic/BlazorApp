using System;
using System.Collections.Generic;

namespace BlazorApp.Database;

public partial class Employee
{
    public int EmployeeId { get; set; }

    public string EmployeeName { get; set; } = null!;

    public string? JobTitle { get; set; }

    public int? Age { get; set; }

    public string? Gender { get; set; }
}
