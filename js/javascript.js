    var counter = 0;
    var total_sum;
    var current_credit;

    $(document).ready(function () {
      $("#course_info").show();
      $("#submitted_by").show();
      $("#submitted_to").show();
        $("#next_btn").show();
        $("#foot").show();
        $("#imgfirst").show();
        $("#result1").hide();
        $("#result").hide();
    });

    $("#next_btn").click(function () {
        $("#course_info").hide();
        $("#submitted_by").hide();
        $("#submitted_to").hide();
        $("#next_btn").hide();
        $("#foot").hide();
        $("#result1").show();
        $("#result").show();
        $("#imgfirst").hide();
        var course_title = $("#course_title").val();
        var course_code = $("#course_code").val();
        var assOrLab = $("#assOrLab").val();
        var name = $("#name").val();
        var dept = $("#dept").val();
        var clsId = $("#clsId").val();
        var profLec = $("#profLec").val();
        var designation = $("#designation").val();
        var profLecDep = $("#profLecDep").val();
        var subDate = $("#subDate").val();
        
        //output
        
        if(course_title == "" && course_code == "" && assOrLab == "" && name == "" && dept == "" && clsId == "" && profLec == "" && designation=""  && subDate == ""){
          myref();
          $("#result1").hide();
          $("#result").hide();
          alert("Please Fill Up All Your Information!")
        }else{
          document.getElementById('course_title_out').innerHTML = course_title;
          document.getElementById('course_code_out').innerHTML = course_code;
          document.getElementById('assOrLab_out').innerHTML = assOrLab;
          document.getElementById('name_out').innerHTML = name;
          document.getElementById('dept_out').innerHTML = dept;
          document.getElementById('clsId_out').innerHTML = clsId;
          document.getElementById('profLec_out').innerHTML = profLec;
          document.getElementById('designation_out').innerHTML = designation;
          document.getElementById('profLecDep_out').innerHTML = profLecDep;
          
          if(subDate == ""){
              console.log('');
          }else{
            var dateAr = subDate.split('-');
            var newDate = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0].slice(-2);
            document.getElementById('subDate_out').innerHTML = newDate;
          }
        }
        
        
    });

    function myfun(){
      $("#download_btn").hide();
      $("#refresh").hide();
      window.print();
    }

    function myref(){
      location.reload();
    }
 