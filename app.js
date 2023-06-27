$('.ui.radio.checkbox')
  .checkbox()
;

$('#submit').click(function () {

  let output = `[divbox2=transparent][center][b][size=90]San Andreas State Parks[/size]
[size=110]GUIDED PATROL REPORT[/size][/b][/center]
[hr][/hr]


[size=85][b]FIELD TRAINING RANGER:[/b][/size] ${$('#fto_first').val()} ${$('#fto_last').val()}
[size=85][b]FIELD TRAINING STUDENT:[/b][/size] ${$('#trainee_first').val()} ${$('#trainee_last').val()}
[size=85][b]DATE OF PATROL:[/b][/size] ${$('#date').val()}
[size=85][b]PATROL TIME:[/b][/size] ${$('#time').val()}
[size=85][b]PHASE:[/b][/size] ${$('#phase').val()}

[size=110][b]ASSESSMENT:[/b][/size]

[aligntable=left,0,0,20,0,0,0][b]I[/b] - Insufficient[/aligntable][aligntable=left,0,0,20,0,0,0][b]S[/b] - Standard[/aligntable][aligntable=left,0,0,20,0,0,0][b]E[/b] - Excellent[/aligntable][aligntable=left,0,0,20,0,0,0][b]N/O[/b] - Not Observed[/aligntable][aligntable=left,0,0,20,0,0,0][b]U[/b] - Unresponsive[/aligntable]

[hr]
[center][size=120][list=none]1. [b]Etiquette and Professional Standards[/b][/list][/size][hr][/hr][/center]
[spoiler]
[list][*][b]Evaluates the way the cadet accepts criticism and feedback.[/b]

[quote]${$('[name=field1]:checked').val()}[/quote]

[*][b]Evaluates how the cadet interacts with the Training Ranger and other members of the community or of the department.[/b]

[quote]${$('[name=field2]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's attitude towards their duties, their motivation, goals and initiative.[/b]

[quote]${$('[name=field3]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's ethical aptitudes and integrity as a Public Servant.[/b]

[quote]${$('[name=field4]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's leadership skills and problem solving capabilities..[/b]

[quote]${$('[name=field5]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's compliance with General Appearance regulations.[/b]

[quote]${$('[name=field6]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's ability to relate and show empathy with members of the public.[/b]

[quote]${$('[name=field7]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's verbal escalation and de-escalation skills.[/b]

[quote]${$('[name=field8]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's confidence when conducting themselves as a Law Enforcement Officer.[/b]

[quote]${$('[name=field9]:checked').val()}[/quote]

[/list][/spoiler][hr][/hr]

[center][size=120][list=none]2. [b]Practical Competence[/b][/list][/size][hr][/hr][/center]
[spoiler]
[list][*][b]Evaluates the Cadet's emergent and non emergent driving skill and adherence to policy and law. [/b]

[quote]${$('[name=field10]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's report writing skills, grammar, spelling and coherence in writing when handling official departmental paperwork.[/b]

[quote]${$('[name=field11]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's attention to detail and capability of identifying crimes, as well as responding correctly to each situation by using the right tool or procedure.[/b]

[quote]${$('[name=field12]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's physical escalation and de-escalation skills and adherence to the force continuum.[/b]

[quote]${$('[name=field13]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's performance, response time and resilience to stress under general conditions.[/b]

[quote]${$('[name=field14]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's situational awareness and officer safety, performing tasks while maximizing safety to self and others.[/b]

[quote]${$('[name=field15]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's radio communications and effectiveness in relaying accurate, timely information.[/b]

[quote]${$('[name=field16]:checked').val()}[/quote]
[/list][/spoiler][hr][/hr]

[center][size=120][list=none]3. [b]Theoretical Competence[/b][/list][/size][hr][/hr][/center]
[spoiler]
[list][*][b]Evaluates the Cadet's usage of the Mobile Data Terminal (MDT) and relevant Law Enforcement Portals.[/b]

[quote]${$('[name=field17]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's knowledge of geography and their surroundings, as well as their ability to find locations and respond to them in a timely, acceptable time frame.[/b]

[quote]${$('[name=field18]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's knowledge in internal policy and procedure.[/b]

[quote]${$('[name=field19]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's knowledge of criminal law, penal code, WACA and other legislature relevant to departmental duties.[/b]

[quote]${$('[name=field20]:checked').val()}[/quote]

[*][b]Evaluates the Cadet's competency when handling a suspect, arrest procedures, first, second, fourth, fifth amendments and warrant requirements.[/b]

[quote]${$('[name=field21]:checked').val()}[/quote]
[/list][/spoiler][hr][/hr]

[center][size=120][list=none]4. [b]Out of Character Competence[/b][/list][/size][hr][/hr][/center]
[spoiler]
[list][*][b]Evaluates the Cadet's roleplay standards and character portrayal. [/b]

[quote]${$('[name=field22]:checked').val()}[/quote]
[*][b]Evaluates the Cadet's demeanor, acceptance of criticism and feedback.[/b]

[quote]${$('[name=field23]:checked').val()}[/quote]
[hr][/hr][/list][/spoiler]
[/divbox2][divbox2=white]
[b]MATERIAL COVERED:[/b]
[divbox=lightgrey]${$('#material').val()}[/divbox]

[b]PERFORMANCE INSIGHT:[/b]
[divbox=lightgrey]${$('#performance').val()}[/divbox]

[b]NARRATIVE:[/b]
[divbox=lightgrey]${$('#narrative').val()}[/divbox]

[ooc][b]ROLEPLAY ABILITY:[/b][/ooc] 
[divbox=lightgrey]${$('#roleplay').val()}[/divbox]

[list][/list][/divbox2]`

    $('#output').val(output);
});

$('#copy').click(function() {
    
  var copyText = document.getElementById('output');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

});