//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TimeGo.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Period
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Period()
        {
            this.Timesheets = new HashSet<Timesheet>();
        }
    
        public int PeriodId { get; set; }
        public Nullable<int> CompanyId { get; set; }
        public Nullable<System.DateTime> PeriodStart { get; set; }
        public Nullable<System.DateTime> PeriodEnd { get; set; }
        public Nullable<System.DateTime> Reminder1Date { get; set; }
        public Nullable<System.DateTime> Reminder2Date { get; set; }
        public int PeriodStatusId { get; set; }
        public Nullable<int> UpdatedById { get; set; }
        public Nullable<System.DateTime> UpdatedOn { get; set; }
    
        public virtual Company Company { get; set; }
        public virtual Employee Employee { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Timesheet> Timesheets { get; set; }
    }
}
