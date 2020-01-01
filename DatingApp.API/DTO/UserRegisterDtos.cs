using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTO
{
    public class UserRegisterDtos
    {
        [Required]
        public string userName { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 characters.")]
        public string password { get; set; }
    }
}