import assert from 'assert';
import morseDecode from './solution';

assert.equal('A', morseDecode('.-'));
assert.equal('Z', morseDecode('--..'));
assert.equal('SOS', morseDecode('... --- ...'));
assert.equal('SOS A', morseDecode('... --- ...   .-'));
assert.equal('', morseDecode(''));
assert.equal('S', morseDecode(' ...'));
assert.equal('S', morseDecode('     ...   '));
assert.equal('S', morseDecode('     ...   '));
assert.equal('YOU SHALL NOT PASS111', morseDecode('-.-- --- ..-   ... .... .- .-.. .-..   -. --- -   .--. .- ... ... .---- .---- .----   '));
