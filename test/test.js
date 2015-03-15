var fs   = require('fs');
var path = require('path');
var exec = require('child_process').exec;

var expect = require('chai').expect;
var hw     = require('headway');
var del    = require('del');


describe('todo tests', function() {
  var testDir = path.join(process.cwd(), 'test');
  var fixturesDir = path.join(testDir, 'fixture');
  var outputPath = path.join(fixturesDir, 'todo.md');
  var output;

  before(function(done) {
    var cdCmd   = 'cd ' + fixturesDir;
    var todoCmd = 'node ../../bin/todo';
    exec([cdCmd, todoCmd].join(' && '), done);
  });

  after(function(done){
    del(outputPath, function(error, deletedFiles){
      if(error) throw error;
      hw.log('\n {green}Successfully {red}deleted{green} ' + deletedFiles);
      done();
    });
  });

  // Failing test to ensure things are going as planned
  it('Should fail on the unexpected test', function() {
    output = fs.readFileSync(outputPath);
    var unexpectedOutputPath = path.join(testDir, 'todoUnexpected.md');
    var unexpectedOutput = fs.readFileSync(unexpectedOutputPath);
    expect(output.toString()).to.not.equal(unexpectedOutput.toString());
  });

  it('Should output the correct file', function() {
    output = fs.readFileSync(outputPath);
    var expectedOutputPath = path.join(testDir, 'todoExpected.md');
    var expectedOutput = fs.readFileSync(expectedOutputPath);
    expect(output.toString()).to.equal(expectedOutput.toString());
  });

});

